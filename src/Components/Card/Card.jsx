

const Card = () => {
    return (
      <div className="overflow-hidden rounded-2xl has-shadow w-[30rem] relative">
        <div>
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80"
            className="aspect-video"
            alt=""
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black" />
        <div className="absolute inset-x-0 bottom-0 z-20 p-4 text-white">
          <div className="text-xs">Ricco Xie • 1 June 2023</div>
          <h3 className="text-xl font-semibold">Sira team talk</h3>
          <div className="text-sm opacity-80">
            <p>
              🕹 Customizable and 😍 accessible design system which provides
              TailwindCSS component className name library to build modern UI.
              💥
            </p>
          </div>
        </div>
      </div>
    );
};

export default Card;