export default function ColorBox({color}) {
  return (
    <div
      style={{backgroundColor: color}}
      className="w-full h-32 rounded relative"
    >
      <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-mono">
        {color}
      </div>
    </div>
  )
}