import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../store";
import DataCard from "../../components/card";
import styles from "./styles.module.css";
import { TextField, Box, Button, Typography } from "@mui/material";
import MultipleSelect from "../../components/select-menu";
import categoryItems from "../../utils/constants/category.json";
import subcategoryItems from "../../utils/constants/subcategory.json";
import filterItems from "../../utils/helpers/filterData";
import CircularProgress from "@mui/material/CircularProgress";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  clearAllLocalStorage,
} from "../../utils/helpers/localStorageUtils";
import getSubcategories from "../../utils/helpers/getSubcategories";

function Home(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchByName, setSearchByName] = useState(
    getFromLocalStorage("searchByName", "")
  );
  const [category, setCategory] = useState(getFromLocalStorage("category", []));
  const [subcategory, setSubcategory] = useState(
    getFromLocalStorage("subcategory", [])
  );

  useEffect(() => {
    props.getData();
    setIsLoading(false);
    saveToLocalStorage("searchByName", searchByName);
    saveToLocalStorage("category", category);
    saveToLocalStorage("subcategory", subcategory);
  }, [searchByName, category, subcategory]);

  const filters = {
    category,
    subcategory,
  };

  const filteredItems = filterItems(props.data, filters, searchByName);

  const data = filteredItems.map((item) => {
    return (
      <DataCard
        key={item.id}
        name={item.name}
        category={item.category}
        subcategory={item.subcategory}
      />
    );
  });

  const handleRest = () => {
    setSearchByName("");
    setCategory([]);
    setSubcategory([]);
    clearAllLocalStorage();
  };

  return (
    <Box className={styles.Container}>
      <Box className={styles.ActionBox}>
        <TextField
          sx={{ m: 1 }}
          id="outlined-basic"
          label="Search By Name"
          variant="outlined"
          onChange={(e) => setSearchByName(e.target.value)}
          value={searchByName.toString()}
        />
        <MultipleSelect
          items={categoryItems}
          placeholder="category"
          selected={category}
          setSelected={setCategory}
        />
        <MultipleSelect
          items={getSubcategories(category)}
          placeholder="subcategory"
          placeholderTitle="please select category first"
          selected={subcategory}
          setSelected={setSubcategory}
        />
        <Button
          onClick={handleRest}
          className={styles.Button}
          variant="contained"
        >
          Rest
        </Button>
      </Box>
      <Box className={styles.Data}>
        {isLoading ? (
          <CircularProgress className={styles.loadingSpinner} />
        ) : filteredItems.length > 0 ? (
          data
        ) : (
          <Typography className={styles.notDataFound} variant="h3">
            Not Data Found !!!
          </Typography>
        )}
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(fetchItems()),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.track.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
