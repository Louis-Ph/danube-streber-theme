<?php

declare(strict_types=1);

namespace Visual\Theme;

final class Invoice
{
    public function __construct(
        private string $id,
        private float $total,
    ) {
    }

    public function render(): string
    {
        return sprintf('Invoice %s => %.2f EUR', $this->id, $this->total);
    }
}

$invoice = new Invoice('INV-2026-03', 149.95);
echo $invoice->render() . PHP_EOL;
