
export const MULT_TABLES = Array.from({length:11},(_,i)=>i+2);
export function multExercises(table,level){
  const max = level<5?5:level<10?10:12;
  const out=[];
  for(let i=0;i<5;i++){
    const b = Math.floor(Math.random()*max)+1;
    out.push({a:table,b});
  }
  return out;
}
