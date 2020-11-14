const DATA = [
  {id:1,value:432,name:"KZT"},
  {id:2,value:78,name:"RUB"},
  {id:3,value:493,name:"AMD"},
  {id:4,value:84,name:"KGS"},
  {id:5,value:29,name:"UAH"}
]
console.log(DATA)

const listItems = d3.select('ul')
.selectAll('li')
.data(DATA, (data)=>data.name)
.enter()
.append('li');

listItems.append('span')
.text((data)=>data.name);


const xScale = d3.scaleBand()
.domain(DATA.map( (dp) => dp.name )).rangeRound([0,500]).padding(0.1);

const yScale = d3.scaleLinear().domain([0,500]).rangeRound([0,500]);


const container = d3.select("svg")
.append('g')
.call(d3.axisBottom(xScale))
.attr('color','#DD1111')

const bars = container
.selectAll(".bar")
.data(DATA)
.enter()
.append('rect')
.classed('bar',true)
.attr('width',xScale.bandwidth())
.attr('height',data=>yScale(data.value))
.attr('x',data=>xScale(data.name))
.attr('y', data=>500-yScale(data.value));
// .text(data=>data.value);
console.log(DATA)
console.log(DATA[0].value , ' value d0')

listItems
.append('input')
.attr('type','checkbox')
.attr('checked',true)
.attr('id',(data)=>data.id)
.on('change', (e)=>{
  console.log(e.target);
  targetId = parseInt(e.target.id);
  if (e.target.checked == false){
    const filtered = DATA.filter((el)=>el.id!== targetId);
    d3.selectAll('.bar')
        .data(filtered, data=>data.name)
        .exit()
        .remove()
      }
    else {
      let filtered = DATA.filter((el)=>el.id == targetId);
      const bars = container
      .selectAll(".bar")
      .data(filtered, data=>data.name)
      .enter()
      .append('rect')
      .classed('bar',true)
      .attr('width',xScale.bandwidth())
      .attr('height',data=>yScale(data.value))
      .attr('x',data=>xScale(data.name))
      .attr('y', data=>200-yScale(data.value));
      console.log(DATA)
      console.log(DATA[0].value , ' value d0')
    }
});


const M = d3.scaleBand()
.domain(['Jan','Feb','Mar','Apr','May'])
.range([1,2]);

console.log(M('Jan'));
console.log(M('Feb'));
console.log(M('Mar'));
console.log(M('Apr'));
console.log(M('May'));
