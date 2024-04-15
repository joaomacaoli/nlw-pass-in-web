interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return <button className="bg-green-500 h-10 px-3 rounded" >{props.title}</button>
}
