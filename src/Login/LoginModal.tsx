import { useState, ChangeEvent } from 'react';
import { Box, Typography, Modal, 
    Button, TextField, Alert, Stack } from '@mui/material';

interface LoginModalProps {
    modalOpen: boolean,
    onChangeIsAdmin: (isAdmin: boolean) => void,
    onChangeModalOpen: (isAdmin: boolean) => void,
}
export function LoginModal(props : LoginModalProps) {
    const [fieldCheck, setFieldCheck] = useState(false)
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [loginSuccess, setLoginSuccess] = useState("")
    // "error" : 에러가 발생했습니다. "fail" : 로그인 실패

    const idChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setId(e.target.value);
    }
    const pwChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPw(e.target.value);
    }
    const loginButtonClickHandler = () => {
        if (!id || !pw) { // 아이디 비밀번호 필수 입력 필드 체크
            setFieldCheck(true);
            return;
        }
        setLoginSuccess("error");
        // 성공했을 시 
        //props.onChangeIsAdmin(true)
    }
 
    return (
        <Modal
            open={props.modalOpen}
            onClose={() => props.onChangeModalOpen(false)}
        >
            <Box sx={modalStyle}>
                <Stack spacing={1}>
                    <Typography variant="h6" sx={{marginBottom: '1rem'}}>
                        관리자 로그인
                    </Typography>
                    <TextField 
                        id="outlined-basic" 
                        error={fieldCheck && !id}
                        value={id} 
                        onChange={idChangeHandler} 
                        label="ID"
                    />
                    <TextField 
                        id="outlined-basic" 
                        error={fieldCheck && !pw}
                        value={pw} 
                        onChange={pwChangeHandler} 
                        label="password"
                    />
                    <Button variant='outlined' onClick={loginButtonClickHandler}>Log in</Button>
                    {loginSuccess === "error" &&
                        <Alert severity="error">로그인 중 에러가 발생했습니다.</Alert>
                    }
                    {loginSuccess === "fail" &&
                        <Alert severity="warning">아이디 혹은 패스워드가 잘못 되었습니다.</Alert>
                    }
                </Stack>
            </Box>
        </Modal>
    )
}
const modalStyle = {
    position: 'absolute' as 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    padding: '4rem',
};