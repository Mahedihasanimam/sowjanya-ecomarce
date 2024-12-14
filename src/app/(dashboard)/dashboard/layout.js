

export default function RootLayout({ children }) {
  return (

    <div className="flex items-center ">
      <div>
        sidebar
      </div>

      <div>

        <div>header</div>
        {children}
      </div>
    </div>

  );
}
