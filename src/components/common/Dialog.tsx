"use client"
import React, { ReactNode, useRef } from 'react'
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Input, Label, makeStyles } from '@fluentui/react-components';


interface UseDialogProps {
    children: ReactNode;
    isOpen: any;
    closeModal: any;
}

const UseDialog: React.FC<UseDialogProps> = ({ children, isOpen, closeModal }) => {
    const subtitle = useRef<HTMLHeadingElement | null>(null);
    const onOpenDialog = () => {
        if (subtitle.current) {
            subtitle.current.style.color = '#f00';
        }
    };
    return (
        <Dialog
            open={isOpen}
            onOpenChange={onOpenDialog}
            modalType="modal">
            <DialogSurface >
                {children}
            </DialogSurface>
        </Dialog>
    )
}
export default UseDialog;