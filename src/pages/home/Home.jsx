const Home = () => {
  return (
    <div className="flex justify-between gap-8">
      {/* panel izquierdo */}
      <aside className="bg-secondary w-1/3 rounded-md">Panel izqiuerdo</aside>
      {/* contenido principal */}
      <div className="w-full flex flex-col gap-8">
        {/* estados de amigos y crear nuevo post */}
        <div className="bg-secondary rounded-md">
          {/* estados de amigos */}
          <div>
            estados
          </div>
          {/* crear nueva publicacion */}
          <div>
            crear publicacion
          </div>
        </div>
        {/* publicaciones */}
        <div className="bg-secondary rounded-md">
          Publicaciones
        </div>
      </div>
      {/* panel derecho */}
      <aside className="bg-secondary w-1/3 rounded-md">Panel derecho</aside>
    </div>
  )
}

export default Home