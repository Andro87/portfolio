import styles from "./CloseBtn.module.scss";

interface Props {
    readonly onCloseMenuMobile: () => void;
}

export const CloseBtn: React.FunctionComponent<Props> = props => {
    const { onCloseMenuMobile } = props;
    return <div className={styles.container} onClick={onCloseMenuMobile}></div>;
};
