import styles from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContatcForm from "./components/ContatcForm";
import ContatcList from "./components/ContatcList";

function App() {
	return (
		<div className={styles.app}>
			<h1>Phone Book</h1>

			<Container>
				<Row>
					<Col sm="6">
						<ContatcForm />
					</Col>
					<Col sm="6">
						<ContatcList />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
