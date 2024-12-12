const { getDefaultConfig } = require('@expo/metro-config');

module.exports = async (env) => {
  const {
    resolver: { sourceExts, ...resolver },
    ...config
  } = await getDefaultConfig(__dirname);

  return {
    ...config,
    resolver: {
      ...resolver,
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'],
    },
  };
};
