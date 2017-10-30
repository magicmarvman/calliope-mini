#include "CalliopeSettings.h"
#include "MicroBit.h"
#include "nrf_delay.h"
#include "nrf_gpio.h"

#ifdef CALLIOPE_COMPASS_TEST

MicroBit uBit;

void callibrate_compass(c) {

    uBit.display.clear();

    c.calibrate();
    while(c.isCalibrating()) {
        uBit.soundmotor.soundOn(392);
        fiber_sleep(125);
        uBit.soundmotor.soundOff();
    }
    
    uBit.display.clear();
}

int main() {
    MicroBitI2C i2c(I2C_SDA0, I2C_SCL0); 
    MicroBitAccelerometer accelerometer(i2c); 
    MicroBitStorage storage;
    MicroBitCompass compass(i2c, accelerometer, storage); 

    uBit.display.clear();
    
    compass.calibrate();
    while(compass.isCalibrating()) {
        uBit.soundmotor.soundOn(392);
        fiber_sleep(125);
        uBit.soundmotor.soundOff();
    }
        
    uBit.display.clear();

    while(1) {
        uBit.display.print("X");
        uBit.sleep(500);
        uBit.display.scroll(compass.getX());
        uBit.sleep(2000);
        
        uBit.display.print("Y");
        uBit.sleep(500);
        uBit.display.scroll(compass.getY());
        uBit.sleep(2000);
        
        uBit.display.print("Z");
        uBit.sleep(500);
        uBit.display.scroll(compass.getZ());
        uBit.sleep(2000);

        uBit.display.clear();
        
    }
}

#endif