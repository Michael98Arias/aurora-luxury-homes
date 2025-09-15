"use client";

import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useProperties } from "@/hooks/useProperties";
import styles from "./PropertiesList.module.scss";

export default function PropertiesList() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const limit = 10;

  const { properties, loading, total, refresh } = useProperties(page, limit);

  const handleLoadMore = () => {
    if (page * limit < total) {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.propertiesList}>
      <div className={styles.propertiesList__grid}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className={styles.propertiesList__card}>
                <Skeleton variant="rectangular" height={200} />
                <CardContent>
                  <Skeleton />
                  <Skeleton width="60%" />
                </CardContent>
              </Card>
            ))
          : properties.map((property) => (
              <Card key={property.id} className={styles.propertiesList__card}>
                <div className={styles.propertiesList__card__image}>
                  <Image
                    src={property.Image}
                    alt={property.Name}
                    width={150}
                    height={120}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardContent className={styles.propertiesList__card__content}>
                  <Typography
                    className={styles.propertiesList__card__content__title}
                  >
                    {property.Name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={styles.propertiesList__card__content__subtitle}
                  >
                    {property.Locations}
                  </Typography>
                  <Typography
                    color="primary"
                    className={styles.propertiesList__card__content__price}
                  >
                    {property.PriceProperty}
                  </Typography>
                </CardContent>
              </Card>
            ))}
      </div>

      {page * limit < total && (
        <div className={styles.propertiesList__loadMore}>
          <Button variant="outlined" onClick={handleLoadMore}>
            {t("all.loadMore")}
          </Button>
        </div>
      )}
    </div>
  );
}
