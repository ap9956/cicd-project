test('basic test', () => {
    expect(1 + 1).toBe(2);
});

test('server response check', () => {
    expect("CI/CD Pipeline Working 🚀").toContain("Pipeline");
});