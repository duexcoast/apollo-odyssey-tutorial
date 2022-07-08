export const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to
    // populate the hompage grid of our web client.
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    incrementCounter: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.incrementCounter(id);
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getModules(id);
    },
  },
};
