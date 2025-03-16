'use client';

import React, { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

interface MinStockSettingProps {
  itemId: number;
  itemName: string;
  currentMinStock: number;
  unit: string;
  onUpdate: (itemId: number, newMinStock: number) => Promise<boolean>;
}

export default function MinStockSetting({ 
  itemId, 
  itemName, 
  currentMinStock, 
  unit, 
  onUpdate 
}: MinStockSettingProps) {
  const [open, setOpen] = useState(false);
  const [minStock, setMinStock] = useState(currentMinStock);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleUpdate = async () => {
    try {
      const result = await onUpdate(itemId, minStock);
      if (result) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setOpen(false);
        }, 1500);
      }
    } catch (err) {
      setError('Failed to update minimum stock level');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <>
      <IconButton 
        variant="plain" 
        color="neutral" 
        size="sm" 
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <InfoOutlined />
      </IconButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="min-stock-modal-title"
          aria-describedby="min-stock-modal-description"
          size="md"
        >
          <ModalClose />
          <Typography id="min-stock-modal-title" level="h2">
            Set Minimum Stock Level
          </Typography>
          <Typography id="min-stock-modal-description" level="body-md">
            Set the minimum stock level for {itemName}. You will receive notifications when the inventory falls below this level.
          </Typography>

          <Sheet sx={{ mt: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
            <Input
              type="number"
              value={minStock}
              onChange={(e) => setMinStock(Number(e.target.value))}
              slotProps={{
                input: {
                  min: 0,
                  step: 1
                }
              }}
              endDecorator={unit}
            />
            <Button onClick={handleUpdate}>Update</Button>
          </Sheet>

          {error && (
            <Alert color="danger" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert 
              color="success" 
              sx={{ mt: 2 }}
              startDecorator={<CheckCircleOutlineRoundedIcon />}
            >
              Minimum stock level updated successfully!
            </Alert>
          )}
        </ModalDialog>
      </Modal>
    </>
  );
} 