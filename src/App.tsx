import { useEffect, useRef } from "react";
import "./App.css";
import BoostCTA from "./components/ui/BoostCTA";
import Footer from "./components/ui/Footer";
import Main from "./components/ui/Main";
import NavBar from "./components/ui/NavBar";
import Button from "./components/Button";
import mobilePhoto from "./assets/images/mobile-active-states.jpg";
import desktopPhoto from "./assets/images/desktop-active-states.jpg";

function App() {
	const modalRef = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		const modal = modalRef.current;
		if (modal) modal.showModal();
	});

	const handleModalClose = () => {
		const modal = modalRef.current;
		if (modal) modal.close();
	};

	return (
		<>
			<dialog ref={modalRef} className="modal">
				<div className="modal__content grid">
					<p>
						Esta página ha sido hecha usando React + Typescript a modo de
						ejemplo para escritorio y móbil, y cuenta con implementaciones que
						no serían correctas en una etapa de producción. Se destaca:
					</p>
					<p>
						- La única funcionabilidad implementada es la de los botones
						"Shorten it!" y "Copy".
					</p>
					<p>
						- Por defecto se cargan tres resultados (ejemplo1-3) para que se vea
						con más contenido desde un inicio.
					</p>
					<p>
						- La API que devuelve la URL corta puede que no funcione
						correctamente por haberse vencido la llave o el permiso de usuario
						de prueba. En este caso devuelve el error de la misma manera que lo
						haría con la URL corta para que se pueda usar la funcionabilidad del
						"Copy" y mostrar como se van agregando las líneas. Esto en
						producción sería claramente distinto.
					</p>
					<p>
						- Los modelos que se reproducen se pueden ver en:
						<a href={mobilePhoto} download={mobilePhoto}>
							Móvil
						</a>
						<a href={desktopPhoto} download={desktopPhoto}>
							Escritorio
						</a>
					</p>
				</div>
				<Button
					label="Cerrar"
					aditionalClass="btn-secondary"
					onClick={handleModalClose}
				/>
			</dialog>
			<div className="body__main">
				<NavBar />
				<Main />
			</div>
			<div className="body__footer">
				<BoostCTA />
				<Footer />
			</div>
		</>
	);
}

export default App;
