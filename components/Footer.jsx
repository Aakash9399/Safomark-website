export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="logo" className="h-10 w-10 object-contain"/>
          <div>
            <div className="font-semibold">Safomark Solutions urban</div>
            <div className="text-sm text-slate-500">Leaders in Road Marking & Surface Coating Solutions</div>
          </div>
        </div>

        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Safomark Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
