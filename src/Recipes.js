export default function Recipes(props){
  const cal = Math.floor(props.recipe.calories);
  return (
    <div>
      <h1>{props.recipe.label}</h1>
      <p>Calories: { cal }</p>
      <img src={props.recipe.image} alt={props.recipe.label} />
    </div>
  );
}