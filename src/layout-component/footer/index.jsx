import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from "./styles.module.css";

function Footer() {
    return (
        <Box className={styles.footerBox}>
            <Typography className={styles.footerTypography}>Copyright ©2024 ASSET.com</Typography>
        </Box>
    );
}

export default Footer;