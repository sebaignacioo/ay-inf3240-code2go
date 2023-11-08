import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    Icon: React.FC<React.SVGAttributes<SVGElement>>;
    nombre: string;
    usuario: string;
    descripcion: string;
} & React.SVGAttributes<SVGElement>;

const BloqueInicio = ({ Icon, nombre, usuario, descripcion }: Props) => {

    const [open, setOpen] = useState(false);

    return (<li className="overflow-hidden rounded-xl border border-slate-200">
        <div className="flex items-center gap-x-4 border-b border-slate-900/5 bg-slate-50 p-6">
            <Icon />
            <div className="text-sm font-medium leading-6 text-slate-900">
                {nombre}
            </div>
            <div className="relative ml-auto">
                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="-m-2.5 block p-2.5 text-slate-400 hover:text-slate-500"
                    id="options-menu-0-button"
                    aria-expanded="false"
                    aria-haspopup="true">
                    <span className="sr-only">Abrir opciones</span>
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                    </svg>
                </button>

                {open && (
                    <div
                        className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-slate-900/5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu-0-button"
                        tabIndex={-1}>
                        <a
                            href="#"
                            className="block px-3 py-1 text-sm leading-6 text-slate-900"
                            role="menuitem"
                            tabIndex={-1}
                            id="options-menu-0-item-0">
                            Ver<span className="sr-only">bloque</span>
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-1 text-sm leading-6 text-slate-900"
                            role="menuitem"
                            tabIndex={-1}
                            id="options-menu-0-item-1">
                            Editar<span className="sr-only">bloque</span>
                        </a>
                    </div>
                )}

            </div>
        </div>
        <dl className="-my-3 divide-y divide-slate-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-slate-500">Usuario</dt>
                <dd className="text-slate-700">
                    <span>{usuario}</span>
                </dd>

            </div>
            <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-slate-500">Descripción</dt>
                <dd className="flex items-start gap-x-2">
                    <div className="font-medium text-slate-900">{descripcion}</div>

                </dd>
            </div>
        </dl>
    </li>
    );
};

export default BloqueInicio;