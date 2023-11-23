import React from "react";
import { Button, Container, Form, Input, Label } from "./signin";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FlexColumn, FlexColumnCenterV } from "../styles/flex";
import axios from "axios";
import Link from "next/link";

const signup = (props) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { isSubmitting, isSubmitted, errors },
		getValues,
	} = useForm<{ id: string; pw: string; pwConfirm: string }>({ mode: "onSubmit" });

	const join = async () => {
		try {
			const param = {
				id: "123",
				password: "123",
			};

			const res = await axios.post("http://localhost:5000/signup", param);

			console.log(res.data);
		} catch (e) {
			console.error(e);
		}
	};
	const onSubmit = () => {
		console.log("sign up");
		join();
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FlexColumnCenterV gap={2.5} flex={3}>
					<FlexColumnCenterV fullW>
						<Label>아이디</Label>
						<Input
							id="id"
							placeholder="아이디를 입력하세요."
							{...register("id", { required: "아이디를 입력해주세요." })}
						/>
						{errors.id && <span>{errors.id.message}</span>}
					</FlexColumnCenterV>
					<FlexColumnCenterV fullW>
						<Label>비밀번호</Label>
						<Input
							id="pw"
							placeholder="비밀번호를 입력하세요."
							{...register("pw", { required: "비밀번호를 입력해주세요." })}
						/>
						{errors.pw && <span>{errors.pw.message}</span>}
					</FlexColumnCenterV>
					<FlexColumnCenterV fullW>
						<Label>비밀번호 확인</Label>
						<Input
							id="pwConfirm"
							placeholder="비밀번호를 재입력하세요."
							{...register("pwConfirm", { required: "비밀번호를 한 번 더 입력해주세요." })}
						/>
						{errors.pw && <span>{errors.pw.message}</span>}
					</FlexColumnCenterV>
				</FlexColumnCenterV>
				<FlexColumnCenterV gap={2} flex={1}>
					<Button type="submit">회원가입</Button>
					<span style={{ width: "100%", textAlign: "center" }}>
						<Link href="/signin">로그인 페이지로 이동</Link>
					</span>
				</FlexColumnCenterV>
			</Form>
		</Container>
	);
};

export default signup;
