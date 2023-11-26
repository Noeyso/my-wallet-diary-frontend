import React from "react";
import { Container, Form, Input, Label, SignButton } from "./signin";
import { useForm } from "react-hook-form";
import { FlexCenterV, FlexColumnCenterV } from "../styles/flex";
import axios from "axios";
import Link from "next/link";
import { StatusMessage } from "../styles/text";
import { Button } from "../styles/button";
import useModal from "../hooks/useModal";

const signup = (props) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		getValues,
	} = useForm<{ id: string; pw: string; pwConfirm: string }>({ mode: "onChange" });
	const [idBlurTrigger, setIdBlurTrigger] = React.useState(false);
	const [isValidId, setIsValidId] = React.useState(false);

	const { openAlertModal } = useModal();

	const checkId = async () => {
		try {
			setIdBlurTrigger(true);
			const param = {
				id: watch("id"),
			};

			const res = await axios.post("http://localhost:5000/checkId", param);

			if (res.status === 200) {
				if (res.data.flag) {
					setIsValidId(true);
				} else {
					setIsValidId(false);
				}
			}
		} catch (e) {
			console.error(e);
		}
	};

	const join = async () => {
		try {
			const param = {
				id: watch("id"),
				password: watch("pw"),
			};
			const res = await axios.post("http://localhost:5000/signup", param);
		} catch (e) {
			console.error(e);
		}
	};

	const onSubmit = () => {
		if (!idBlurTrigger) {
			openAlertModal("아이디 중복 확인을 해주세요.");
			return;
		}
		if (!isValidId) {
			openAlertModal("중복된 아이디입니다.");
			return;
		}

		join();
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FlexColumnCenterV gap={2} flex={3}>
					<FlexColumnCenterV fullW>
						<Label>아이디</Label>
						<FlexCenterV fullW justifyContent="space-between" gap={1}>
							<Input
								id="id"
								placeholder="아이디를 입력하세요."
								{...register("id", {
									required: "아이디를 입력해주세요.",
									minLength: {
										value: 5,
										message: "아이디는 최소 5자 이상이어야 합니다",
									},
								})}
								isError={watch("id") && !!errors.id}
							/>

							<Button
								onClick={() => {
									const id = watch("id");
									if (id && id.length >= 5) checkId();
								}}
							>
								중복 확인
							</Button>
						</FlexCenterV>
						{watch("id") && !!errors.id && <StatusMessage>{errors.id.message}</StatusMessage>}
						{idBlurTrigger && !isValidId && <StatusMessage>이미 존재하는 아이디입니다.</StatusMessage>}
						{idBlurTrigger && isValidId && <StatusMessage status="valid">사용 가능한 아이디입니다.</StatusMessage>}
					</FlexColumnCenterV>
					<FlexColumnCenterV fullW>
						<Label>비밀번호</Label>
						<Input
							id="pw"
							placeholder="비밀번호를 입력하세요."
							{...register("pw", {
								required: "비밀번호를 입력해주세요.",
								minLength: {
									value: 8,
									message: "비밀번호는 최소 8자 이상이어야 합니다",
								},
								validate: (value) =>
									/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value) || "비밀번호는 숫자와 영문자를 조합해서 만들어야 합니다.",
							})}
							isError={watch("pw") && !!errors.pw}
						/>
						{watch("pw") && !!errors.pw && <StatusMessage>{errors.pw.message}</StatusMessage>}
						{watch("pw") && !errors.pw && <StatusMessage status="valid">사용 가능한 비밀번호입니다.</StatusMessage>}
					</FlexColumnCenterV>
					<FlexColumnCenterV fullW>
						<Label>비밀번호 확인</Label>
						<Input
							id="pwConfirm"
							placeholder="비밀번호를 재입력하세요."
							{...register("pwConfirm", {
								required: "비밀번호를 한 번 더 입력해주세요.",
								validate: (value) => {
									const pw = getValues("pw");
									return pw === value || "비밀번호가 일치하지 않습니다.";
								},
							})}
							isError={watch("pwConfirm") && !!errors.pwConfirm}
						/>
						{watch("pwConfirm") && !!errors.pwConfirm && <StatusMessage>{errors.pwConfirm.message}</StatusMessage>}
						{watch("pwConfirm") && !errors.pwConfirm && (
							<StatusMessage status="valid">비밀번호가 일치합니다.</StatusMessage>
						)}
					</FlexColumnCenterV>
				</FlexColumnCenterV>
				<FlexColumnCenterV gap={2} flex={1}>
					<SignButton type="submit">회원가입</SignButton>
					<span style={{ width: "100%", textAlign: "center" }}>
						<Link href="/signin">로그인 페이지로 이동</Link>
					</span>
				</FlexColumnCenterV>
			</Form>
		</Container>
	);
};

export default signup;
