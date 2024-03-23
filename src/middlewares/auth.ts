import { Request, Response, NextFunction } from 'express';
import { compare } from '../helpers';
import { userRepository as repo } from '../repositories';

export const verifyTraditional = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { email, password } = req.body;

    const user = await repo.findOneBy({
        email,
    });

    if (!user) {
        throw new Error('User does not exist!');
    }

    const isUserMatch = await compare(
        password as string,
        user.password as string,
    );

    if (!isUserMatch) {
        throw new Error('Password does not match!');
    }

    res.locals.userId = user.id;
    res.locals.email = user.email;
    next();
};

export const verifyWalletAddress = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { walletAddress, password } = req.body;
    const user = await repo.findOneBy({ walletAddress });
    if (!user) {
        throw new Error('User does not exist!');
    }

    const isUserMatch = await compare(
        password as string,
        user.password as string,
    );

    if (!isUserMatch) {
        throw new Error('Password does not match!');
    }

    res.locals.walletAddress = walletAddress;
    next();
};
