const itWithTags = (name, options = {}, fn) => {
  const { tags = [] } = options;
  const activeTags = process.env.TEST_TAGS
    ? process.env.TEST_TAGS.split(",")
    : [];

  // Check if there are no active tags or if the test tags intersect with the active tags
  const shouldRunTest =
    activeTags.length === 0 || tags.some((tag) => activeTags.includes(tag));

  if (shouldRunTest) {
    it(name, fn);
  } else {
    it.skip(name, fn);
  }
};

module.exports = itWithTags;
