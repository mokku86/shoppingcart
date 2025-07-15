export const Button = ({children, bg="bg-blue-800", hover="hover:bg-blue-900"}) => {
  return (
    <button type="button" className={`${bg} ${hover} hover:cursor-pointer text-white rounded-lg py-2 px-4`}>{children}</button>
  )
}
