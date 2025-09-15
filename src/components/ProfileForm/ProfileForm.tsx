'use client';
import { useUserStore } from '@/store/useUserStore';
import { Box, Typography, Paper } from '@mui/material';

export default function ProfileForm() {
  const { username, role } = useUserStore();

  return (
    <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ padding: '20px', width: '100%', maxWidth: '500px', boxShadow: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
          Perfil de Usuario
        </Typography>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="body1">
            <strong>Username:</strong> {username}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="body1">
            <strong>Role:</strong> {role ? role : "No role found"}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
