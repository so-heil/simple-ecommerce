export interface QuantityProperties {
    className?: string;
    value: number;
    onChange: (value: number) => void;
    onZero: () => void;
}
