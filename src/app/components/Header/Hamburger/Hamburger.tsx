import styles from "./Hamburger.module.scss";

interface Props {
    readonly onOpenMenuMobile: () => void;
}

export const Hamburger: React.FunctionComponent<Props> = props => {
    const { onOpenMenuMobile } = props;

    return (
        <div className={styles.container} onClick={onOpenMenuMobile}>
            <div className={styles.top_line}></div>
            <div className={styles.middle_line}></div>
            <div className={styles.bottom_line}></div>
        </div>
    );
};
