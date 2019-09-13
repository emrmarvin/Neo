<<<<<<< HEAD
import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
=======
import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
>>>>>>> b310e7ed1e93c1a87445f914bd283c4188b07c19

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql',
<<<<<<< HEAD
})
=======
});
>>>>>>> b310e7ed1e93c1a87445f914bd283c4188b07c19

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
<<<<<<< HEAD
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo)

export default apolloProvider
=======
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// Install the vue plugin
Vue.use(VueApollo);

export default apolloProvider;
>>>>>>> b310e7ed1e93c1a87445f914bd283c4188b07c19
