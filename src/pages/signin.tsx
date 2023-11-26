import styled from "@emotion/styled";
import React from "react";
import { useForm } from "react-hook-form";
import { FlexColumnCenterV } from "../styles/flex";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import useModal from "../hooks/useModal";
import AlertModal from "../components/modal/AlertModal";
import { StatusMessage } from "../styles/text";

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
export const Input = styled.input<{ isError?: boolean }>`
	width: 100%;
	height: 3rem;
	border: none;
	border-bottom: 5px solid ${({ isError }) => (isError ? "#DC0000" : "#aeaeae")};
	font-size: 18px;
	:focus {
		outline: none;
		border-bottom: 5px solid ${({ isError }) => (isError ? "#DC0000" : "#ebe2f6")};
	}
`;

export const SignButton = styled.button`
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
	const { openModal } = useModal();

	const {
		register,
		handleSubmit,
		watch,
		formState: { isSubmitting, isSubmitted, errors },
		getValues,
	} = useForm<{ id: string; pw: string }>({ mode: "onChange" });

	const router = useRouter();

	const login = async () => {
		try {
			const param = {
				id: watch("id"),
				password: watch("pw"),
			};
			const res = await axios.post("http://localhost:5000/signin", param);

			const { flag, token } = res.data;
			if (!flag) {
				// router.push("/signup");
				openModal(() => <AlertModal content={"로그인 정보 없음 "} />);
			} else {
				localStorage.setItem("token", token);
				router.push("/");
			}
		} catch (e) {
			console.error(e);
		}
	};
	const onSubmit = () => {
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
						{errors.id && <StatusMessage>{errors.id.message}</StatusMessage>}
					</FlexColumnCenterV>
					<FlexColumnCenterV fullW>
						<Label>비밀번호</Label>
						<Input
							id="pw"
							placeholder="비밀번호를 입력하세요."
							{...register("pw", { required: "비밀번호를 입력해주세요." })}
						/>
						{errors.pw && <StatusMessage>{errors.pw.message}</StatusMessage>}
					</FlexColumnCenterV>
				</FlexColumnCenterV>
				<FlexColumnCenterV gap={2} flex={1}>
					<SignButton type="submit">로그인</SignButton>
					<span style={{ width: "100%", textAlign: "center" }}>
						계정이 없으신가요? <Link href="/signup">가입</Link>
					</span>
				</FlexColumnCenterV>
			</Form>
		</Container>
	);
};

export default signin;
