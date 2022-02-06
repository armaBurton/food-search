export default function Recipes(props){
  console.log(props.recipe);
  const cal = Math.floor(props.recipe.calories);
  return (
    <div className='recipe-card'>
      <h1>{props.recipe.label}</h1>
      <p>Calories: { cal }</p>
      <img src={props.recipe.image} alt={props.recipe.label} />
      <ul className="">
        {
          props.recipe.ingredients.map((ingredient, i) => (<li key={ingredient + i} >
            {ingredient.text}
          </li>))
        }
      </ul>
    </div>
  );
}