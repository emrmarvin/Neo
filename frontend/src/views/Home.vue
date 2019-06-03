<template>
  <div class="home">
    <div>
      <span>Name:</span><input type="text" v-model="name">
      <span>Description:</span><input type="text" v-model="description">
      <button @click="create_task">Add</button>
    </div>
    <div v-for="i in tasks" :key="i.id">
      <ul>
        <li>
          <input type="checkbox" @input="update_task(i)" :checked="i.isDone">
          <strong>{{ i.name }}</strong>
          <strong>{{ i.description }}</strong>
        </li>
      </ul>

    </div>
    <v-card>
    <v-card-title>
      Data
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table 
      :headers="headers"
      :items="tasks"
      :search="search"
    >
      <template v-slot:items="task">
          <td>{{ task.name }}</td>
          <td>{{ task.description }}</td>
          <td>
            <v-checkbox primary @input="update_task(i)" :checked="props.item.isDone"
            ></v-checkbox>
          </td>            
      </template>
      <template v-slot:no-data>
        <v-alert :value="true" color="warning" icon="warning">
          Sorry, no data, nothing to display here
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
  </div>
  
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag';

const TaskQuery = gql`
  query {
    tasks {
      id
      isDone
      name
      description
    }
  }
`;

const TaskCreate = gql`
  mutation createTask($name:String, $description: String) {
      createTask(name: $name, description: $description) {
        task {
          id
          isDone
          name
          description
        }
        ok
    }
 }
`;

const TaskUpdate = gql`
  mutation updateTask($id: String, $IsDone: Boolean) {
    updateTask(id: $id, IsDone: $IsDone) {
      task {
        id
        isDone
        name
        description
      }
      ok
    }
  }
`;

export default {
  data() {
    return {
      name: ' ',
      description: ' ',
      tasks: [' '],
      headers: [
          {
            text: 'Task Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Description', value: 'description' },
          { text: 'Is Done', value: 'isDone' },
        ], 
    };
  },
  apollo: {
    tasks: TaskQuery,
  },
  methods: {
    async create_task() {
      const { name, description } = {
        name: this.name,
        description: this.description,
      };

      // call the graphql mutation
      let data = await this.$apollo.mutate({
        // query
        mutation: TaskCreate,
        // parameters
        variables: {
          name: name,
          description: description,
        },
        update: (store, { data: { createTask } }) => {
          // add to all tasks list
          const data = store.readQuery({ query: TaskQuery });
          data.tasks.push(createTask.task);
          store.writeQuery({ query: TaskQuery, data });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createTask: {
            __typename: 'CreateTask',
            task: {
              __typename: 'TaskType',
              id: -1,
              isDone: false,
              name: name,
              description: description,          
            },
            ok: false,
          },
        },
      });
      const t = data.data.createTask.task;
      // console.log('Added:', t);
      this.name = '';
      this.description = '';
    },
    async update_task(task) {
      await this.$apollo.mutate({
        mutation: TaskUpdate,
        variables: {
          id: task.id,
          IsDone: !task.isDone,
        },
      });
    },
  },
};
</script>
