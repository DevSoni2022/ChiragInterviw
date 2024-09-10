const obj = [{
    key: 'Sample 1',
    data: 'Data1'
  },
  {
    key: 'Sample 1',
    data: 'Data1'
  },
  {
    key: 'Sample 2',
    data: 'Data2'
  },
  {
    key: 'Sample 1',
    data: 'Data1'
  },
  {
    key: 'Sample 3',
    data: 'Data1'
  },
  {
    key: 'Sample 4'
  }
];


const grpByData = () =>{
    return obj.reduce((value, item) => {
        const { key, data } = item;
        if (!value[key]) {
            value[key] = [] || '';
        }
        value[key].push({ key, data  });
        return value;
    }, {});
}

console.log(grpByData(obj))