import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    useTheme,
} from '@/MUI/MuiComponents';

import { DeleteIcon } from '@/MUI/MuiIcons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigateWithArrow from '@/components/private/NavigateWithArrow';

function AccountDelete() {
    const theme = useTheme();
    const [openDialog, setOpenDialog] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);

        // Simulate API call
        setTimeout(() => {
            setIsDeleting(false);
            setOpenDialog(false);
            toast.success('Your account has been deleted');
            // TODO: Add actual API call + redirect if needed
        }, 1500);
    };

    return (
        <Box component={'section'}>
            <ToastContainer position="top-right" autoClose={2000} theme="colored" />

            <Stack mb={2}>
                <NavigateWithArrow
                    redirectTo={'/connect/settings/account'}
                    text={'Delete Account'}
                />
            </Stack>

            <Box
                sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    py: 4,
                    px: 2,
                    backdropFilter: 'blur(14px)',
                    borderRadius: 1,
                    backgroundColor: 'transparent',
                    boxShadow: `inset 1px 1px 0.2rem ${theme.palette.text.secondary}`,
                }}
            >
                <Typography textAlign="center" variant="h5" fontWeight={600} mb={1}>
                    Delete <span style={{ color: theme.palette.error.main }}>Account</span>
                </Typography>

                <Typography
                    variant="body2"
                    textAlign="center"
                    color="text.secondary"
                    mb={4}
                >
                    This action is permanent and cannot be undone. All your data including
                    chats and profile will be removed.
                </Typography>

                <Stack alignItems="center">
                    <Button
                        variant="contained"
                        color="error"
                        endIcon={<DeleteIcon />}
                        onClick={() => setOpenDialog(true)}
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Deleting...' : 'Delete My Account'}
                    </Button>
                </Stack>
            </Box>

            {/* Confirmation Dialog */}
            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
            >
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete your account? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setOpenDialog(false)}
                        disabled={isDeleting}
                        sx={{ color: 'text.primary' }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDelete}
                        color="error"
                        variant="contained"
                        disabled={isDeleting}
                    >
                        Yes, Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AccountDelete;
