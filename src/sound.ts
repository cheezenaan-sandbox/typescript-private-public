class Sample {
  public public(): string {
    this.private();
    return 'Public method!';
  }

  private private(): string {
    return 'Private method!';
  }
}

const sample = new Sample();

sample.public();
