import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import styles from "./styles.module.css";

export default function DataCard(props) {
  const { name, category, subcategory } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
       <CardMedia
        sx={{ height: 260 }}
        image="/assets/img.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography
          className={styles.typography}
          gutterBottom
          variant="h5"
          component="div"
        >
          <span className={styles.title}>name:</span> {name}
        </Typography>
        <Typography
          className={styles.typography}
          gutterBottom
          variant="h6"
          component="div"
        >
          <span className={styles.title}>category:</span> {category}
        </Typography>
        <Typography
          className={styles.typography}
          variant="body1"
        >
          <span className={styles.title}>subcategory:</span> {subcategory}
        </Typography>
      </CardContent>
    </Card>
  );
}
