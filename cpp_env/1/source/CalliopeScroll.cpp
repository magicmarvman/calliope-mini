#include "CalliopeSettings.h"
#include "MicroBit.h"
#include "nrf_delay.h"
#include "nrf_gpio.h"


MicroBit uBit;

#ifdef CALLIOPE_SCROLL_TEST

int main() {
    uBit.init();
    uBit.display.scroll("Cpp WORKS!");
}

#endif