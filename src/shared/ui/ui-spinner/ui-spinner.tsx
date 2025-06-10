import styles from "./ui-spinner.module.scss";

export const UiSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
};
