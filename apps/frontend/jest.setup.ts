import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import nextRouterMock from 'next-router-mock';

// Mock Next.js App Router
jest.mock('next/dist/client/router', () => nextRouterMock);
jest.mock('next/router', () => nextRouterMock);

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder; 

beforeEach(() => {
    jest.clearAllMocks();
});