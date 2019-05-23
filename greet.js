const joe = happy

if( joe = happy){
  helloWorld('joe')
}else{
  console.log('GO AWAY BIG GREEN MONSTER, GO AWAY!')
}

const helloWorld = (name = "World") => {
  return `Hello ${name}!`;
}
