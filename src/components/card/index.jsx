import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";

export default function DataCard(props) {
  const { name, category, subcategory } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardContent>
        <Typography
          className={styles.title}
          gutterBottom
          variant="h5"
          component="div"
        >
          <span>name:</span> {name}
        </Typography>
        <Typography
          className={styles.title}
          gutterBottom
          variant="h6"
          component="div"
        >
          <span>category:</span> {category}
        </Typography>
        <Typography
          className={styles.title}
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          <span>subcategory:</span> {subcategory}
        </Typography>
      </CardContent>
    </Card>
  );
}
