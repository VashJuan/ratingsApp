import classification from './classification';

const schema = {
  name: {
    label: 'Name',
    show: true,
    samples: ['LAMP', 'Next.js', 'WordPress'],
    align: 'left',
  },
  year: {
    label: 'Year',
    type: 'year',
    show: true,
    samples: [2015, 2013, 2021],
  },
  category: {
    label: 'Category',
    type: 'suggest',
    options: classification.categorys,
    show: true,
    samples: ['Tech Stack', 'Jamstack', 'CMS'],
    align: 'left',
  },
  rating: {
    label: 'Rating',
    type: 'rating',
    show: true,
    samples: [3, 1, 5],
  },
  comments: {
    label: 'Comments',
    type: 'textarea',
    samples: ['Open source', 'license issues?', 'legacy tech'],
  }
};

export default schema;
