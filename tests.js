let menu = [
  {
    name: 'teste',
    context: 'asdasd',
    submenu: [
      {
        name: 'tes12******3te',
        context: 'asd123asd'
      },
      {
        name: 't1111111este',
        context: 'asdas111111d'
      }
    ]
  
  },
  {
    name: 'tes12345555te',
      context: 'asdasd',
      submenu: [
        {
          name: 'tes123te########',
          context: 'asd123asd'
        },
        {
          name: 't1111111este',
          context: 'asdas111111d'
        }
      ]
  },
  {
    name: 'te123123ste',
      context: 'asdasd',
      submenu: [
        {
          name: 'tes123te%%%%%%%%%',
          context: 'asd123asd'
        },
        {
          name: 't1111111este',
          context: 'asdas111111d'
        }
      ]
  }
] 




menu.filter( item => {
  // console.log(item)
  item.submenu.filter( itemSub => {
    // console.log(itemSub)
  })
})


const numbers = [1,2,3,4,5]
const doubled = numbers.map( number => number * 2)

console.log(`\n\nantigo array: ${numbers} \nnovo array: ${doubled}\n`)

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const scale = 'c'

console.log('scale -> ', scaleNames[scale])



