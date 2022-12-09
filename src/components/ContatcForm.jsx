import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContatcForm = () => {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const dispatch = useDispatch();

	/*
	const getName = (e) => {   모든 이벤트 핸들러는 이벤트라는 매개변수를 넘김
		setName(e.target.value);
		//console.log(name);
	};
	*/

	const addContact = (e) => {
		e.preventDefault(); //리로드 되는 것을 막아줌(submit의 기본 속성)
		dispatch({
			//던져줄 액션을 dispatch를 이용해 만들어 준다
			type: "ADD_CONTACT",
			payload: { name, phoneNumber },
		});
		setName("");
		setPhoneNumber("");
	};

	return (
		<div>
			<Form onSubmit={addContact}>
				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>이름</Form.Label>
					<Form.Control
						type="text"
						placeholder="이름을 입력해주세요"
						onChange={(e) => setName(e.target.value)}
						//onChange={getName} - 이처럼 함수 따로 만들지 않고 바로 사용
						value={name}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formContact">
					<Form.Label>전화번호</Form.Label>
					<Form.Control
						type="number"
						placeholder="전화번호를 입력해주세요"
						onChange={(e) => setPhoneNumber(e.target.value)}
						value={phoneNumber}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					추가
				</Button>
			</Form>
		</div>
	);
};

export default ContatcForm;
