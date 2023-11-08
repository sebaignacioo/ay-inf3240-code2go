import BloqueInicio from '../components/BloqueInicio';

import CIcon from '../components/CIcon';
import CSharpIcon from '../components/CSharpIcon';
import PythonIcon from '../components/PythonIcon';
import TSIcon from '../components/TSIcon';

const Inicio = () => {
    return (
        <main>
            <div className="relative isolate overflow-hidden pt-16">
                <header className="pb-4 pt-6 sm:pb-6">
                    <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
                        <h1 className="text-base font-semibold leading-7 text-slate-900">
                            Code2Go
                        </h1>
                        <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-slate-200 sm:pl-6 sm:leading-7">
                            <a href="#" className="text-emerald-600">
                                Mis bloques
                            </a>
                            <a href="#" className="text-slate-700">
                                Bloques de terceros
                            </a>
                            <a href="#" className="text-slate-700">
                                Últimos bloques públicos
                            </a>
                        </div>
                        <a
                            href="#"
                            className="ml-auto flex items-center gap-x-1 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                            <svg
                                className="-ml-1.5 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true">
                                <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"></path>
                            </svg>
                            Crear bloque
                        </a>
                    </div>
                </header>
            </div>

            <div className="space-y-16 py-6 xl:space-y-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <ul
                            role="list"
                            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                            <BloqueInicio nombre="ejemplo.py" Icon={PythonIcon} usuario="usuario1" descripcion="descripcion1" />
                            <BloqueInicio nombre="ejemplo.c" Icon={CIcon} usuario="usuario2" descripcion="descripcion1" />
                            <BloqueInicio nombre="ejemplo.ts" Icon={TSIcon} usuario="admin" descripcion="descripcion1" />
                            <BloqueInicio nombre="ejemplo.cs" Icon={CSharpIcon} usuario="admin" descripcion="descripcion1" />
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Inicio;
