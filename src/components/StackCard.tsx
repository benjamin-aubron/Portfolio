

export default function StackCard({name, children}: {name: string, children: React.ReactNode}) {
  return (
    <div className="border border-neutral-800 rounded-2xl p-4 h-full">
      <h3 className="font-semibold text-neutral-100 text-2xl pb-2">{name}</h3>
      <div className="">{children}</div>
    </div>
  )
}
