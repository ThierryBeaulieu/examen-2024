#ifndef SWING_H
#define SWING_H

class Swing
{
public:
    enum Type
    {
        babies,
        flat
    };
    float calculateHeight();
    Swing(int id, Type type, float rope);
    ~Swing() = default;

private:
    Type _type;
    float _ropeLength;
    int _id;
    int _direction = 0;
public:
    int _horizontalPos = 0;
    void update(int = 1);
};


#endif /* Swing.h */
