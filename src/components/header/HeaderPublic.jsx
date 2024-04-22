const HeaderPublic = () => {
  return (
    <header className="bg-secondary h-12 px-4 md:px-0 flex items-center">
      <div className="container mx-auto flex gap-4 justify-between h-[80%]">
        <div className="w-1/3">Logo</div>
        <div className="w-full relative">
          <input type="text" className="size-full bg-primary_light rounded-md" placeholder="search" />
          <label htmlFor="" className="absolute left-0">icono</label>
        </div>
        <div className="w-1/3">acciones usuario</div>
      </div>
    </header>
  )
}

export default HeaderPublic