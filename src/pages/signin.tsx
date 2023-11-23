import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { FlexCenter, FlexCenterV, FlexColumn, FlexColumnCenterV } from "../styles/flex";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 0 2.5rem;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;
export const Label = styled.label`
	color: #000;
	font-family: Noto Sans;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
export const Input = styled.input`
	width: 100%;
	height: 3rem;
	border: none;
	border-bottom: 5px solid #aeaeae;
	font-size: 18px;
	:focus {
		outline: none;
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 3rem;
	border: 2px solid #000;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	background: #ebe2f6;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	:hover {
		transform: scale(1.01);
	}

	:active {
		transform: translateY(4px);
	}

	color: #222;
	font-family: Noto Sans;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const signin = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { isSubmitting, isSubmitted, errors },
		getValues,
	} = useForm<{ id: string; pw: string }>({ mode: "onSubmit" });

	const router = useRouter();

	const login = async () => {
		console.log("login");
		try {
			const param = {
				id: watch("id"),
				password: watch("pw"),
			};
			const res = await axios.post("http://localhost:5000/signin", param);

			console.log(res.data);
			const { flag, token } = res.data;
			if (!flag) {
				router.push("/signup");
			} else {
				localStorage.setItem("token", token);
				router.push("/");
			}
		} catch (e) {
			console.error(e);
		}
	};
	const onSubmit = () => {
		console.log("onsubmit");
		login();
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FlexColumnCenterV gap={2.5} flex={2}>
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
				</FlexColumnCenterV>
				<FlexColumnCenterV gap={2} flex={1}>
					<Button type="submit">로그인</Button>
					<span style={{ width: "100%", textAlign: "center" }}>
						계정이 없으신가요? <Link href="/signup">가입</Link>
					</span>
				</FlexColumnCenterV>
			</Form>
		</Container>
	);
};

export default signin;
